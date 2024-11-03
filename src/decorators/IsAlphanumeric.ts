import { HttpStatus } from '@nestjs/common';
import {
  IsAlphanumeric as OriginalIsAlphanumeric,
  ValidationOptions,
} from 'class-validator';

// 既存のバリデーションのエラーメッセージを変更する
export const IsAlphanumeric = (
  locale?: validator.AlphanumericLocale,
  validationOptions?: ValidationOptions,
) =>
  OriginalIsAlphanumeric(locale, {
    message: (validationArguments) =>
      `${validationArguments.property}に指定された文字は使用できません。`,
    context: { code: 'EC01001', status: HttpStatus.BAD_REQUEST },
    ...validationOptions,
  });
