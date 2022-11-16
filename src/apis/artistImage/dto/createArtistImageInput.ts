import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateArtistImageInput {
  @Field(() => String)
  url: string;
}
