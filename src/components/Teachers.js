import React from "react";
import instructor1 from "../Assets/instructor1.jpg";
import instructor2 from "../Assets/instructor2.jpg";
import "../App.css";

function Teachers() {
  return (
    <section id="teachers" className="teachers">
      <h2>Our Teachers</h2>
      <div className="teacher-list">
        <div class="teacher-card">
          <img src={instructor1} alt="Teacher 3" />
          <h3>Aditya Lekhwar</h3>
          <h4>Hatha and Ashtanga Yoga Expert</h4>
          <p>
            Experienced and certified yoga educator specializing in anatomy,
            breath work, and trauma-informed yoga. Skilled in guiding all
            levels, including beginners and those with special needs, both
            in-person and online. Focused on women’s health and transformative
            wellness through yoga and yogic diet. Currently pursuing a Master’s
            in Yogic Science with extensive teaching experience in Rishikesh and
            online.
          </p>
        </div>

        <div class="teacher-card">
          <img src={instructor2} alt="Teacher 3" />
          <h3>Takshak Yogi</h3>
          <h4>Vinyasa Yoga Expert</h4>
          <p>
            Over 8 years of dedicated practice and teaching, bringing authentic
            wisdom to every session. Approach blends traditional Hatha and
            Vinyasa with modern mindfulness, creating a safe, transformative
            space for all levels.
          </p>
        </div>

        <div class="teacher-card">
          <img src={instructor1} alt="Teacher 3" />
          <h3>Somadrita Neog</h3>
          <h4>Hatha Yoga Expert</h4>
          <p>
            Over 8 years of dedicated practice and teaching, bringing authentic
            wisdom to every session. Approach blends traditional Hatha and
            Vinyasa with modern mindfulness, creating a safe, transformative
            space for all levels.
          </p>
        </div>

        <div class="teacher-card">
          <img src={instructor1} alt="Teacher 3" />
          <h3>Saurabh Bhatt</h3>
          <h4>Vinyasa Yoga Expert</h4>
          <p>
            Over 8 years of dedicated practice and teaching, bringing authentic
            wisdom to every session. Approach blends traditional Hatha and
            Vinyasa with modern mindfulness, creating a safe, transformative
            space for all levels.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Teachers;
