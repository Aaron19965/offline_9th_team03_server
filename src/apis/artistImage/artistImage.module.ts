import { Artist } from 'src/apis/artists/entity/artist.entity';
import { ArtistImage } from 'src/apis/artistImage/entity/artistImage.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArtistImageService } from './artistImage.service';
import { ArtistImageResolver } from './artistImage.resolver';
import { Module } from '@nestjs/common';

@Module({
  imports: [TypeOrmModule.forFeature([ArtistImage, Artist])],
  providers: [
    ArtistImageResolver, //
    ArtistImageService,
  ],
})
export class ArtistImageModule {}
