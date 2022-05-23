import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  ViberShareButton,
  ViberIcon,
  WhatsappShareButton,
  WhatsappIcon,
  LinkedinShareButton,
  LinkedinIcon,
  PinterestShareButton,
  PinterestIcon,
} from "next-share";

import classes from "./ShareLinksCont.module.scss";

export default function ShareLinksCont({ data }) {
  const { httpaddress, title } = data;
  return (
    <div className={classes.share_link_cont}>
      <FacebookShareButton url={httpaddress} quote={title} hashtag={"#Zdrava"}>
        <FacebookIcon size={32} round />
      </FacebookShareButton>

      <TwitterShareButton url={httpaddress} title={title}>
        <TwitterIcon size={32} round />
      </TwitterShareButton>

      <ViberShareButton url={httpaddress} title={title}>
        <ViberIcon size={32} round />
      </ViberShareButton>

      <WhatsappShareButton url={httpaddress} title={title} separator=":: ">
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>

      <LinkedinShareButton url={httpaddress}>
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>

      <PinterestShareButton url={httpaddress} media={title}>
        <PinterestIcon size={32} round />
      </PinterestShareButton>
    </div>
  );
}
