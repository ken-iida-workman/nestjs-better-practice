import { BadRequestException } from '@nestjs/common';
import { ValidationError } from 'class-validator';

export const exceptionFactory = (errors: ValidationError[]) => {
  /**
   *
   * @param context
   * @param predicate
   * @returns
   */
  const findValueInObject = <T extends Record<string, any>, R>(
    context: T,
    predicate: (obj: T[keyof T]) => R,
  ): T[keyof T] => Object.values(context).find(predicate);
  /**
   *
   * @param context
   * @returns
   */
  const getStatus = (
    context: Record<string, { status?: number } | undefined>,
  ): number => {
    const statusContext = findValueInObject(context, (value) => value?.status);
    return statusContext?.status ?? 500;
  };
  /**
   *
   * @param context
   * @returns
   */
  const getCode = (
    context: Record<string, { code?: string } | undefined>,
  ): string => {
    const statusContext = findValueInObject(context, (value) => value?.code);
    return statusContext?.code ?? 'EC0000';
  };
  /**
   *
   */
  const errorConvert = errors.map((error: ValidationError) => ({
    status: getStatus(error.contexts),
    code: getCode(error.contexts),
    detail: Object.values(error.constraints)[0] ?? 'error',
    pointer: error.property,
    value: error.value,
  }));
  return new BadRequestException(errorConvert);
};
