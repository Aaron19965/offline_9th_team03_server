import { CreateArtistImageInput } from './dto/createArtistImageInput';
import { GraphQLUpload, FileUpload } from 'graphql-upload';
import { FilesService } from './../files/files.service';
import { ArtistImage } from 'src/apis/artistImage/entity/artistImage.entity';
import { ArtistImageService } from './artistImage.service';
import { Mutation, Resolver, Args } from '@nestjs/graphql';

@Resolver()
export class ArtistImageResolver {
  constructor(
    private readonly artistImageService: ArtistImageService, //
  ) {}

  @Mutation(() => ArtistImage)
  async createArtistImage(
    @Args('createArtistImageInput')
    createArtistImageInput: CreateArtistImageInput,
  ) {
    return this.artistImageService.create({ createArtistImageInput });
  }
}
