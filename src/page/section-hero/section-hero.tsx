import { Block, Button, Title, Subtitle, Section, Icon } from "@/shared/ui";
import Image from "next/image";
import style from "./section-hero.module.css";

export const SectionHero = () => (
  <Section className={style.section}>
    <Block className={style.block}>
      <Button theme="transparent">
        Скачать APK
        <Image
          src="/download-black.svg"
          alt="download"
          width={24}
          height={24}
        />
      </Button>
      <div className={style.content}>
        <Title>Ваш помощник</Title>
        <Subtitle>в борьбе с ревматическими заболеваниями</Subtitle>
      </div>
      <div className={style.app_buttons}>
        <Button className={style.app_button} theme="black">
          <Image src="/apple.svg" alt="apple" width={24} height={24} />
          Скачать для iOS
        </Button>
        <Button className={style.app_button} theme="black">
          <Image src="/google.svg" alt="google" width={24} height={24} />
          Скачать для Android
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
        src="/video/video.mp4"
        autoPlay
        loop
        muted
      />
    </Block>
    <Block className={style.block}>
      <Icon color="var(--color-blue)" src="/video-square.svg" />
      <p className={style.block_description}>смотреть видео о приложении</p>
    </Block>
    <Block className={style.block}>
      <Icon color="var(--color-green)" src="/scan-code.svg" />
      <p className={style.block_description}>Скачать по QR коду</p>
      <Image src="/qrcode.svg" alt="qrcode" width={120} height={120} />
    </Block>
  </Section>
);
