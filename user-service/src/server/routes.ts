import { Express, Request, Response, NextFunction } from 'express';

import User  from '#root/db/models/User';
import { getConnection, getRepository } from 'typeorm';

import dayjs from 'dayjs';
import config from 'config';
import generateUUID from '#root/utils/generateUUID';
import passwordVerification from '#root/utils/passwordVerification';
import UserSession from '#root/db/models/UserSession';

const USER_SESSION_EXPIRY_HOURS = <number>config.get('USER_SESSION_EXPIRY_HOURS');

const setupRoutes = (app: Express) => {

  const connection = getConnection();
  const userRepository = getRepository(User);

  app.get('/users/:userId', async (req: Request, res: Response, next: NextFunction) => {
    
    try {

      const user = await userRepository.findOne(req.params.id);

      if (!user) return next(new Error('Invalid user id.'));

      return res.json(user);

    } catch (err) {
      return next (err);
    }
  })

  app.post('/auth/login', async (req: Request, res: Response, next: NextFunction) => {

    try {

      if (!req.body.username || !req.body.password) {
        return next(new Error('username/password are required fields.'));
      }
      
      const user = await userRepository.findOne(
        {
          username: req.params.username
        },
        {
          select: ["id", "password"],
        }
      );

      if (!user) return next(new Error('Invalid user id.'));

      if (!passwordVerification(req.body.password, user.password)) {
        return next(new Error('Invalid username/credentials.'));
      }

      const expiresAt = dayjs().add(USER_SESSION_EXPIRY_HOURS, "hour").toISOString();
      const sessionToken = generateUUID();

      const userSession = {
        expiresAt,
        id: sessionToken,
        user_id: user.id
      };

      await connection.createQueryBuilder().insert().into(UserSession).values([userSession]);

      return res.json(userSession);

    } catch (err) {
        return next(err);
    }
  });
};

export default setupRoutes;