<section id="about">
  <h2>
    About me:
    <img
      src="https://res.cloudinary.com/jedn-web-dev/image/upload/t_face_focus/v1643470506/jeds_hut/jed_yc7zq2.jpg"
      alt="My face in a ski lift car park"
    />
  </h2>

  <p>
    Hi I'm Jed and I am a very interesting person. I am a big fan of programming
    as I can feel productive while actually watching reading about the new and
    exciting javascript framework that is guaranteed to rock your world and
    change your life. The current framework I am addicted to is called Svelte
    and I highly reccomend you check it out. An astute reader will note that to
    be an interesting person you have to have more than one interest so here are
    some others of mine: playing guitar, long distance running, playing bass and
    building and modifying guitars.
  </p>

  <blockquote>
    <i>
      "It's me again, Mr. New Vegas, reminding you that you're nobody 'til
      somebody loves you. And that somebody is me. I love you."
    </i>
    <br />
    <br />
    - Mr. New Vegas
  </blockquote>

  <h3>Tech skills:</h3>
  <ul>
    <li>Golang with gorilla/mux for backend.</li>
    <li>Postgresql for database stuff.</li>
    <li>Lots of experience with bare HTML, CSS and JS.</li>
    <li>Svelte with SvelteKit is my frontend weapon of choice.</li>
    <li>One summer holiday's worth of ruby/rails knowledge.</li>
    <li>Excellent unix skills - I use Arch btw</li>
  </ul>

  <h3>Fun facts:</h3>
  <ul>
    <li>Number of toes: 10</li>
    <li>Favorite colour: Purple</li>
    <li>(as an aside the css "color" spelling makes me sick)</li>
    <li>I drink black coffee to impress my dad</li>
    <li>
      I have definitely spent more time customising my Linux setup than getting
      work done
    </li>
    <li>I will work for money</li>
  </ul>
</section>

<style lang="scss">
  section {
    width: 100%;
    background-color: v.$cadetblue;
    padding: v.$quarter-note;

    display: grid;
    grid-gap: v.$eighth-note;
  }

  h2 {
    display: flex;
    align-items: center;
    font-size: 2rem;
    justify-content: space-between;
  }

  img {
    border-radius: 50%;
    width: 5rem;
  }

  blockquote {
    padding-left: v.$eighth-note;
    border-left: v.$midnightgreen solid 0.25rem;
  }
</style>
