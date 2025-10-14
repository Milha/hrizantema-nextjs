// import React from 'react'

import { NextPage, GetStaticProps } from "next";

import { buketiKorpeItemData } from "../../data/buketiKorpeItemData";
import { ostaloUPonudiData } from "../../data/ostaloUPonudiData";

import classes from "./gallery.module.scss";

import { GalleryProps } from "../../types/product";
import GalleryCard from "../../components/cards/GalleryCard";

const Gallery: NextPage<GalleryProps> = ({ galleryItems }) => (
  <>
    <section className={classes.section_cont}>
      {galleryItems.map((inj) => (
        <section key={inj.id}>
          {inj.includes && inj.includes.map((item) => <h2 key={item}>Test</h2>)}
          {/* <img src={inj.imageSmall} alt={inj.alt} loading="lazy" /> */}
          <GalleryCard
            data={{
              altText: inj.alt,
              prodId: inj.prodId,
              cardImage: inj.imageSmall,
              cardImageWeb: inj.imageSmallWebP,
              includes: inj.includes,
            }}
          />
        </section>
      ))}
    </section>
  </>
);

export const getStaticProps: GetStaticProps<GalleryProps> = async () => {
  const galleryItems = buketiKorpeItemData;
  return {
    props: {
      galleryItems,
    },
  };
};

export default Gallery;
