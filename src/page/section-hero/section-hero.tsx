import {
  Block,
  Button,
  Title,
  Subtitle,
  Section,
  Icon,
  Modal,
} from "@/shared/ui";
import Image from "next/image";
import style from "./section-hero.module.css";
import { type IPageMain } from "@/widgets/Header/types";

export const SectionHero = async () => {
  const res = await fetch(process.env.NETLIFY_API + "/api/main", {
    next: { revalidate: 3600 },
  });
  const data: IPageMain = await res.json();
  console.log(data, "main page");

  return (
    <Section className={style.section}>
      <Block className={style.block}>
        <Button theme="transparent" disabled={data.buttons.apk.enabled}>
          {data.buttons.apk.label}
          <Image
            src="/download-black.svg"
            alt="download"
            width={24}
            height={24}
          />
        </Button>
        <div className={style.content}>
          <Title>{data.title}</Title>
          <Subtitle>{data.subtitle}</Subtitle>
        </div>
        <div className={style.app_buttons}>
          <Button
            className={style.app_button}
            theme="black"
            disabled={data.buttons.ios.enabled}
          >
            <Image src="/apple.svg" alt="apple" width={24} height={24} />
            {data.buttons.ios.label}
          </Button>
          <Button
            className={style.app_button}
            theme="black"
            disabled={data.buttons.android.enabled}
          >
            <Image src="/google.svg" alt="google" width={24} height={24} />
            {data.buttons.android.label}
          </Button>
        </div>
        <Image
          className={style.circle}
          src="/circle.svg"
          alt="circle"
          width={320}
          height={320}
        />
      </Block>
      <Block className={style.block}>
        <video
          className={style.block_video}
          src={data.videoUrl}
          autoPlay
          loop
          muted
        />
      </Block>
      <Modal
        trigger={
          <Block className={style.block}>
            <Icon color="var(--color-blue)" src="/video-square.svg" />
            <p className={style.block_description}>
              {data.sidebar.watch_video.label}
            </p>
          </Block>
        }
        triggerClassName={style.block}
      >
        <video
          className={style.block_video}
          src={data.sidebar.watch_video.url}
          controls
          autoPlay
          loop
        />
      </Modal>

      <Block className={style.block}>
        <Icon color="var(--color-green)" src="/scan-code.svg" />
        <p className={style.block_description}>{data.sidebar.qr_code.label}</p>
        <Image src="/qrcode.svg" alt="qrcode" width={120} height={120} />
      </Block>
    </Section>
  );
};
