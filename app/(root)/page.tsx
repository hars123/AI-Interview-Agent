import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { dummyInterviews } from "@/constants";
import InterviewCard from "@/components/InterviewCard";

const Page = () => {
  return (   <>
      <section className="card-cta">
        <div className="flex flex-col gap-6 max-w-lg">
          <h2 className="text-2xl font-bold">
            Get Interview with AI Powered Practice & Feedback
          </h2>
          <p className="text-lg text-muted-foreground">
            Practice on real interview questions and get instant feedback.
          </p>

          <Button asChild className="btn-primary max-sm:w-full text-base font-semibold px-6 py-3">
            <Link href="/interview" className="w-full text-center">
              Start an Interview
            </Link>
          </Button>
        </div>
        <Image src= "/robot.png"  alt="robo-dude" width={400} height={400}
        className="max-sm:hidden"
        />
      </section>

      {/* Section 2 home page */}

      <section className="flex flex-col gap-6 mt-8 ">
        <h2>Your Interview</h2>
        <div className="interviews-section">
          {dummyInterviews.map((interview) =>(
          <InterviewCard {...interview} key={interview.id} />
        ))}
        </div>

      </section>

      <section className="flex flex-col gap-6 mt-8">
        <h2>
          Take an Interview
        </h2>
        <div className="interviews-section">
        {dummyInterviews.map((interview) =>(
          <InterviewCard {...interview} key={interview.id} />
           
        ))}

        </div>
        
      </section>
      
    </>
  );
};

export default Page;
