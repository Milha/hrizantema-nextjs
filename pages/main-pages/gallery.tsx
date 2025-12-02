// import React from 'react'

import { NextPage, GetStaticProps } from "next";

import { buketiKorpeItemData } from "../../data/buketiKorpeItemData";
import { ostaloUPonudiData } from "../../data/ostaloUPonudiData";
import { rezanoItemData } from "../../data/rezanoItemData";

import classes from "./gallery.module.scss";

import { GalleryProps } from "../../types/product";
import GalleryCard from "../../components/cards/GalleryCard";

const Gallery: NextPage<GalleryProps> = ({ galleryItems }) => (
  <>
    <section className={classes.section_cont}>
      {galleryItems.map((inj) => (
        <div key={inj.id}>
          <GalleryCard
            data={{
              title: inj.title,
              altText: inj.alt,
              prodId: inj.prodId,
              cardImage: inj.imageSmall,
              cardImageWeb: inj.imageSmallWebP,
              includes: inj.includes,
            }}
          />
        </div>
      ))}
    </section>
  </>
);

export const getStaticProps: GetStaticProps<GalleryProps> = async () => {
  const galleryItemsGetter = [
    ...buketiKorpeItemData,
    ...ostaloUPonudiData,
    ...rezanoItemData,
  ];

  const galleryItems = galleryItemsGetter.sort(() => Math.random() - 0.5);

  return {
    props: {
      galleryItems,
    },
  };
};

export default Gallery;
