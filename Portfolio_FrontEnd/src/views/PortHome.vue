<template>
  <div id="page-top">
    <!-- Navigation-->
    <nav
      class="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top"
      id="mainNav"
    >
      <div class="container">
        <a class="navbar-brand" href="#page-top">Start Bootstrap</a>
        <button
          class="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          Menu
          <i class="fas fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item mx-0 mx-lg-1">
              <a class="nav-link py-3 px-0 px-lg-3 rounded" href="#portfolio"
                >Portfolio</a
              >
            </li>
            <li class="nav-item mx-0 mx-lg-1">
              <a class="nav-link py-3 px-0 px-lg-3 rounded" href="#about"
                >About</a
              >
            </li>
            <li class="nav-item mx-0 mx-lg-1">
              <a class="nav-link py-3 px-0 px-lg-3 rounded" href="#contact"
                >Contact</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <!-- Masthead-->
    <header class="masthead bg-primary text-white text-center">
      <div class="container d-flex align-items-center flex-column">
        <!-- Masthead Avatar Image-->
        <img
          class="masthead-avatar mb-5"
          src="assets/img/avataaars.svg"
          alt="..."
        />
        <!-- Masthead Heading-->
        <h1 class="masthead-heading text-uppercase mb-0">Roger N. Amat</h1>
        <!-- Icon Divider-->
        <div class="divider-custom divider-light">
          <div class="divider-custom-line"></div>
          <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
          <div class="divider-custom-line"></div>
        </div>
        <!-- Masthead Subheading-->
        <p class="masthead-subheading font-weight-light mb-0">
          Database Programmer - Web Designer
        </p>
      </div>
    </header>
    <!-- Portfolio Section-->
    <section class="page-section portfolio" id="portfolio">
      <div class="container">
        <!-- Portfolio Section Heading-->
        <h2
          class="page-section-heading text-center text-uppercase text-secondary mb-0"
        >
          Portfolio
        </h2>
        <!-- Icon Divider-->
        <div class="divider-custom">
          <div class="divider-custom-line"></div>
          <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
          <div class="divider-custom-line"></div>
        </div>
        <!-- Portfolio Grid Items-->
        <div class="row justify-content-center">
          <!-- Portfolio Item 1-->
          <div
            class="col-md-6 col-lg-4 mb-5"
            v-for="(picture, i) in pictures"
            :key="i"
          >
            <div
              class="portfolio-item mx-auto"
              data-bs-toggle="modal"
              :data-bs-target="'#portfolioModal' + (i + 1)"
            >
              <div
                class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100"
              >
                <div
                  class="portfolio-item-caption-content text-center text-white"
                >
                  <i class="fas fa-plus fa-3x"></i>
                </div>
              </div>
              <img
                class="img-fluid"
                :src="'assets/img/portfolio/' + picture"
                alt="..."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- About Section-->
    <section class="page-section bg-primary text-white mb-0" id="about">
      <div class="container">
        <!-- About Section Heading-->
        <h2 class="page-section-heading text-center text-uppercase text-white">
          About
        </h2>
        <!-- Icon Divider-->
        <div class="divider-custom divider-light">
          <div class="divider-custom-line"></div>
          <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
          <div class="divider-custom-line"></div>
        </div>
        <!-- About Section Content-->
        <div class="row">
          <div class="col-lg-4 ms-auto">
            <p class="lead">
              Freelancer is a free bootstrap theme created by Start Bootstrap.
              The download includes the complete source files including HTML,
              CSS, and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
          </div>
          <div class="col-lg-4 me-auto">
            <p class="lead">
              You can create your own custom avatar for the masthead, change the
              icon in the dividers, and add your email address to the contact
              form to make it fully functional!
            </p>
          </div>
        </div>
        <!-- About Section Button-->
        <div class="text-center mt-4">
          <a
            class="btn btn-xl btn-outline-light"
            href="https://startbootstrap.com/theme/freelancer/"
          >
            <i class="fas fa-download me-2"></i>
            Free Download!
          </a>
        </div>
      </div>
    </section>
    <!-- Contact Section-->
    <section class="page-section" id="contact">
      <div class="container">
        <!-- Contact Section Heading-->
        <h2
          class="page-section-heading text-center text-uppercase text-secondary mb-0"
        >
          Contact Me
        </h2>
        <!-- Icon Divider-->
        <div class="divider-custom">
          <div class="divider-custom-line"></div>
          <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
          <div class="divider-custom-line"></div>
        </div>
        <!-- Contact Section Form-->
        <div class="row justify-content-center">
          <div class="col-lg-8 col-xl-7">
            <!-- * * * * * * * * * * * * * * *-->
            <!-- * * SB Forms Contact Form * *-->
            <!-- * * * * * * * * * * * * * * *-->
            <!-- This form is pre-integrated with SB Forms.-->
            <!-- To make this form functional, sign up at-->
            <!-- https://startbootstrap.com/solution/contact-forms-->
            <!-- to get an API token!-->
            <form id="contactForm" data-sb-form-api-token="API_TOKEN">
              <!-- Name input-->
              <div class="form-floating mb-3">
                <input
                  class="form-control"
                  id="name"
                  type="text"
                  placeholder="Enter your name..."
                  data-sb-validations="required"
                  v-model="form.fullname"
                />
                <label for="name">Full name</label>
                <div class="invalid-feedback" data-sb-feedback="name:required">
                  A name is required.
                </div>
              </div>
              <!-- Email address input-->
              <div class="form-floating mb-3">
                <input
                  class="form-control"
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  data-sb-validations="required,email"
                  v-model="form.email"
                />
                <label for="email">Email address</label>
                <div class="invalid-feedback" data-sb-feedback="email:required">
                  An email is required.
                </div>
                <div class="invalid-feedback" data-sb-feedback="email:email">
                  Email is not valid.
                </div>
              </div>
              <!-- Phone number input-->
              <div class="form-floating mb-3">
                <input
                  class="form-control"
                  id="phone"
                  type="tel"
                  placeholder="(123) 456-7890"
                  data-sb-validations="required"
                  v-model="form.phonenumber"
                />
                <label for="phone">Phone number</label>
                <div class="invalid-feedback" data-sb-feedback="phone:required">
                  A phone number is required.
                </div>
              </div>
              <!-- Message input-->
              <div class="form-floating mb-3">
                <textarea
                  class="form-control"
                  id="message"
                  type="text"
                  placeholder="Enter your message here..."
                  style="height: 10rem"
                  data-sb-validations="required"
                  v-model="form.message"
                ></textarea>
                <label for="message">Message</label>
                <div
                  class="invalid-feedback"
                  data-sb-feedback="message:required"
                >
                  A message is required.
                </div>
              </div>
              <!-- Submit success message-->
              <!---->
              <!-- This is what your users will see when the form-->
              <!-- has successfully submitted-->
              <div class="d-none" id="submitSuccessMessage">
                <div class="text-center mb-3">
                  <div class="fw-bolder">Form submission successful!</div>
                  To activate this form, sign up at
                  <br />
                  <a href="https://startbootstrap.com/solution/contact-forms"
                    >https://startbootstrap.com/solution/contact-forms</a
                  >
                </div>
              </div>
              <!-- Submit error message-->
              <!---->
              <!-- This is what your users will see when there is-->
              <!-- an error submitting the form-->
              <div class="d-none" id="submitErrorMessage">
                <div class="text-center text-danger mb-3">
                  Error sending message!
                </div>
              </div>
              <!-- Submit Button-->
              <button
                class="btn btn-primary btn-xl disabled"
                id="submitButton"
                type="submit"
                @click="sendmessage()"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
    <!-- Footer-->
    <footer class="footer text-center">
      <div class="container">
        <div class="row">
          <!-- Footer Location-->
          <div class="col-lg-4 mb-5 mb-lg-0">
            <h4 class="text-uppercase mb-4">Location</h4>
            <p class="lead mb-0">
              2215 John Daniel Drive
              <br />
              Clark, MO 65243
            </p>
          </div>
          <!-- Footer Social Icons-->
          <div class="col-lg-4 mb-5 mb-lg-0">
            <h4 class="text-uppercase mb-4">Around the Web</h4>
            <a class="btn btn-outline-light btn-social mx-1" href="#!"
              ><i class="fab fa-fw fa-facebook-f"></i
            ></a>
            <a class="btn btn-outline-light btn-social mx-1" href="#!"
              ><i class="fab fa-fw fa-twitter"></i
            ></a>
            <a class="btn btn-outline-light btn-social mx-1" href="#!"
              ><i class="fab fa-fw fa-linkedin-in"></i
            ></a>
            <a class="btn btn-outline-light btn-social mx-1" href="#!"
              ><i class="fab fa-fw fa-dribbble"></i
            ></a>
          </div>
          <!-- Footer About Text-->
          <div class="col-lg-4">
            <h4 class="text-uppercase mb-4">About Freelancer</h4>
            <p class="lead mb-0">
              Freelance is a free to use, MIT licensed Bootstrap theme created
              by
              <a href="http://startbootstrap.com">Start Bootstrap</a>
              .
            </p>
          </div>
        </div>
      </div>
    </footer>
    <!-- Copyright Section-->
    <div class="copyright py-4 text-center text-white">
      <div class="container">
        <small>Copyright &copy; Your Website 2021</small>
      </div>
    </div>
    <!-- Portfolio Modals-->
    <div v-for="(project, i) in projects" :key="i">
      <!-- Portfolio Modal 1-->
      <div
        class="portfolio-modal modal fade"
        :id="'portfolioModal' + (i + 1)"
        tabindex="-1"
        :aria-labelledby="'portfolioModal' + (i + 1)"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-xl">
          <div class="modal-content">
            <div class="modal-header border-0">
              <button
                class="btn-close"
                type="button"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body text-center pb-5">
              <div class="container">
                <div class="row justify-content-center">
                  <div class="col-lg-8">
                    <!-- Portfolio Modal - Title-->
                    <h2
                      class="portfolio-modal-title text-secondary text-uppercase mb-0"
                    >
                      {{ project.Title }}
                    </h2>
                    <!-- Icon Divider-->
                    <div class="divider-custom">
                      <div class="divider-custom-line"></div>
                      <div class="divider-custom-icon">
                        <i class="fas fa-star"></i>
                      </div>
                      <div class="divider-custom-line"></div>
                    </div>
                    <!-- Portfolio Modal - Image-->
                    <img
                      class="img-fluid rounded mb-5"
                      :src="'assets/img/portfolio/' + pictures[i]"
                      alt="..."
                    />
                    <!-- Portfolio Modal - Text-->
                    <p class="mb-4">
                      {{ project.Description }}
                    </p>
                    <a :href="project.Link" target="_blank"> Open In Github </a>
                    <br />
                    <br />
                    <button class="btn btn-primary" data-bs-dismiss="modal">
                      <i class="fas fa-times fa-fw"></i>
                      Close Window
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "page-top",
  data() {
    return {
      projects: [
        {
          Title: "Links Manager",
          Description:
            "This is an example of creating an array of objects that allow the user to register, sign in and create a list of links that they can edit or delete. It also has some pagination but this was around when I first started so the pagination was limited to 1 item per page. ",
          Link: "https://github.com/RoAm98/Links_Manager.git",
        },
        {
          Title: "Library",
          Description:
            "This was one of my last projects I worked on. It's a library page I made using Vue, Express, and MySQL. This one on allows the person to register a new user/customer, add and or remove books to the library's list of books, rent out a book of the user's choice, edit and delete rents that are in the system, and edit and delete the users'/customer's information",
          Link: "https://github.com/RoAm98/Library_Vue_Express_MySQL",
        },
        {
          Title: "Employees and Departments",
          Description:
            "This was one of my first projects where I had to make a page using Express and MySQL. It allows the user to register new employees to the system and assign them to a department where they will work. It also allows us to make new Departments. When using MySQL I had to make a connection between the 2 tables by giving every employee a department ID to act as the foreign key of the Departments Table. ",
          Link: "https://github.com/RoAm98/Employees_Departments",
        },
        {
          Title: "Air Travel",
          Description:
            "This is a simple WFA (Windows Form Application) that I developed that allows you to purchase a flight ticket for either one way or roundtrip. It also has conditionals that if one way is chosen then you don't need to choose a return date, but if round trip is chosen then a second date time picker will be enabled for you to choose a return date not only that but has been made so that the return date can not be the same or before as the departure date. After everything has been selected it will tell you the final price for your ticket and show you a receipt with all the information that put in.",
          Link: "https://github.com/RoAm98/Flight_Ticket_WFA",
        },
        {
          Title: "Movie Rent",
          Description:
            "This another WFA (Windows Form App) that I created where a person can rent movies for a certain amount of time and also they could add movies to the application. It also allows the user to see what movies have been checked out by searching for keywords that the user inputs. The application also allows for movies, rents, and customers information be created, edited or deleted from the system.",
          Link: "https://github.com/RoAm98/Movie_Rent_WFA",
        },
        {
          Title: "Issues Manager with Express",
          Description:
            "In here I developed an application to manage issues in a cellphone store using Express JS. The application shows a page to manage the issues with three input fields: description, severity (low, medium or high), and assigned to (must be selected from data stored in the database). Each time an issue is added, an ID number is generated for this issue. The system controls the issue status (open or closed). After the issue is added, it can be closed or deleted. ",
          Link: "https://github.com/RoAm98/IssuesManager_ExpressOriginal",
        },
      ],
      pictures: [
        "linkspic.png",
        "librarypic.png",
        "DepnEmpPic.png",
        "AirTravel.PNG",
        "MovieRent.PNG",
        "IssuesManagerExp.png",
      ],
      form: {
        fullname: "",
        email: "",
        phonenumber: "",
        message: "",
      },
    };
  },
  methods: {
    getprojects: function () {
      let $this = this;
      $.ajax({
        url: `http://localhost:3000/getprojects`,
        type: "GET",
        success: async (data, status) => {
          if (status === "success") {
            $this.projects = await JSON.parse(data);
          }
        },
      });
    },
    sendmessage: function () {
      $.ajax({
        type: "POST",
        url: `${backendurl}/sendmessage`,
        data: this.form,
        success: function (data, status) {
          if (status == "success") alert("Email sent successfully!");
        },
      });
    },
  },
  created() {
    // this.getprojects();
    console.log(this.projects);
    // console.log(this.projects[0].Description)
  },
};
</script>