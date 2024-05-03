import React from "react";
import about from '../../../src/assets/images/about_us/about.png'

const About = () => {
  return (
    <div className="hero py-20">
      <div className="hero-content flex-col lg:flex-row gap-20">
        <img
          src={about}
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
        <h1 className="text-[20px] font-bold w-[400px]">About Us</h1>
          <h1 className="text-5xl font-bold w-[600px] leading-snug">We are qualified & of experience in this field</h1>
          <p className="py-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi placeat culpa delectus, dignissimos impedit vel quam harum id. Explicabo debitis nulla earum totam? Veritatis repellat corporis repellendus doloremque architecto totam voluptatem earum ipsa minus ea non pariatur soluta sunt dolor, nemo est? Autem, asperiores ipsa perferendis sequi obcaecati aliquid! Necessitatibus!
          </p>
          <p className="py-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi placeat culpa delectus, dignissimos impedit vel quam harum id. Explicabo debitis nulla earum totam? Veritatis repellat corporis repellendus doloremque architecto totam voluptatem earum ipsa minus ea non pariatur soluta sunt dolor, nemo est? Autem, asperiores ipsa perferendis sequi obcaecati aliquid! Necessitatibus!
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default About;
