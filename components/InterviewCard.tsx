import { getRandomInterviewCover } from "@/lib/utils";
import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";
import DisplayTechIcons from "./DisplayTechIcons";

const InterviewCard = ({ interviewId, userId, role, type, techstack, createdAt }: InterviewCardProps) => {
  const feedback = null as Feedback | null;
  const normalizedType = /mix/gi.test(type) ? "Mixed" : type;
  const formattedDate = dayjs(feedback?.createdAt || createdAt || Date.now()).format("MMM D, YYYY");

  return (
    <div className="card-border w-[320px] max-sm:w-full min-h-[300px]">
      <div className="card-interview relative">
        {/* Badge */}
        <div className="absolute top-0 right-0 w-fit px-4 py-2 rounded-bl-lg bg-light-600">
          <p className="badge-text">{normalizedType}</p>
          
        </div>

        {/* Image */}
        <Image
          src={getRandomInterviewCover()}
          alt="cover image"
          width={80}
          height={80}
          className="rounded-full object-fit"
        />

        <h3 className="mt-4 capitalize">{role} Interview</h3>

      

        <p className="line-clamp-2 mt-3 text-sm">
          {feedback?.finalAssessment || "you haven't taken the interview yet. Take it now to improve your skills"}
        </p>

        <div className="flex flex-row justify-between items-center mt-4">

          <DisplayTechIcons techStack={techstack} />

          <Link
            href={feedback ? `/interview/${interviewId}/feedback` : `/interview/${interviewId}/feedback`}
            className="btn-primary px-3 pt-2 text-sm rounded bg-blue-600 text-white hover:bg-blue-700"
          >
            {feedback ? "Check Feedback" : "View Interview"}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InterviewCard;
