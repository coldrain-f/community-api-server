import { IsNotEmpty, IsString, Length } from 'class-validator';

export class UpdateBoardDto {
  @IsString()
  @IsNotEmpty()
  @Length(1, 20)
  title: string;

  @IsString()
  @IsNotEmpty()
  @Length(1, 200)
  content: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
