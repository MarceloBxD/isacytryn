import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FEEDBACKS } from "@/data/feedbacks-data";
import { FeedbackCard } from "../../../components/FeedbackCard";
import { Navigation, Pagination, A11y } from "swiper/modules";
import { Title } from "../../../components/Title";

const Feedbacks: React.FC = () => {
  return (
    <div className="max-w-screen w-full mt-10 md:p-16">
      <Title className="ml-6" text="Feedbacks" />
      <h3 className="text-lg ml-6 md:text-xl text-quaternary">
        Aqui estão alguns dos <b>feedbacks</b> dos meus clientes
      </h3>
      <div className="px-6">
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={50}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="mt-5"
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log("swiper", swiper)}
        >
          {FEEDBACKS.map((feedback, index) => (
            <SwiperSlide key={index}>
              <FeedbackCard key={feedback.description} {...feedback} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="flex gap-3 group mx-auto w-fit mt-5 items-center justify-end">
        <a
          href="https://www.doctoralia.com.br/isabela-cytryn-2"
          className="hover:underline hover:cursor-pointer"
        >
          Ver mais feedbacks
        </a>
        <svg
          className="group-hover:translate-x-1 transition-transform duration-150"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 12L20 12"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M13 5L20 12L13 19"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default Feedbacks;
