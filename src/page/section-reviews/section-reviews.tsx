import { Title, Subtitle, Section } from "@/shared/ui";
import style from "./section-reviews.module.css";
import { ReviewCard } from "@/entities/ui";
import Image from "next/image";
import { type ISectionReview } from "./types/section-review";

export const SectionReviews = async () => {
  const res = await fetch(process.env.NETLIFY_API + "/api/slider", {
    next: { revalidate: 3600 },
  });

  const data: ISectionReview = await res.json();
  console.log(data, "slider");

  return (
    <Section className={style.section}>
      <div className={style.content}>
        <Image
          src="/circle.svg"
          alt="circle"
          className={style.circle}
          width={240}
          height={240}
        />
        <Title className={style.title}>{data.title}</Title>
        <Subtitle className={style.subtitle}>{data.description}</Subtitle>
      </div>

      <div className={style.reviews}>
        {data?.data.map((item, index) => (
          <ReviewCard key={index} {...item} />
        ))}
      </div>
    </Section>
  );
};
