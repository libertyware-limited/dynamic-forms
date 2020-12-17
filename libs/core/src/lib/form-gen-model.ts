
import { validate } from 'class-validator';
import { plainToClassFromExist } from 'class-transformer';

export abstract class FormGenModel {
  constructor(data?: unknown) {
    plainToClassFromExist(this, data);
  }
  async isValid(): Promise<boolean> {
    const errors = await validate(this);
    return errors.length === 0;
  }
}
