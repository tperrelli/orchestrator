import bcrypt from 'bcryptjs';

const passwordVerification = (passwordToTest: string, passwordHash: string) => bcrypt.compareSync(passwordToTest, passwordHash);

export default passwordVerification;