import { Title, Subtitle, Section } from "@/shared/ui";
import style from "./section-reviews.module.css";
import { ReviewCard } from "@/entities/ui";
import Image from "next/image";

export const SectionReviews = () => (
  <Section className={style.section}>
    <div className={style.content}>
      <Image
        src="/circle.svg"
        alt="circle"
        className={style.circle}
        width={240}
        height={240}
      />
      <Title className={style.title}>Отзывы от врачей и пациентов</Title>
      <Subtitle className={style.subtitle}>
        на приложение revmo.info app
      </Subtitle>
    </div>

    <div className={style.reviews}>
      {Array.from({ length: 12 }).map((_, index) => (
        <ReviewCard key={index} />
      ))}
    </div>
  </Section>
);
