DOM.insertAdjacentHTML(
  "beforeend",
  `
<div class="services-container vh-100 d-flex align-items-center">
        <div class="container">
            <div class="row">
                <!-- Left side for the title -->
                <div class="col-md-6 d-flex flex-column justify-content-center">
                    <h1 class="text-white fw-bolder display-4">SERVICES</h1>
                    <h2 class="text-white fw-light">Ganto lang kayo di siya</br> responsive pero baka kaya ng iba</br> gayang gaya</h2>
                    <p class="text-white w-75">Report TJ Magpantay ang basher ng product team ginawaan ako ng ppt kupal prinesent pa sa buong Techexecutive.</p>
                </div>
                
                <!-- Right side for the cards -->
                <div class="col-md-6 d-flex flex-wrap">
                    <div class="col-6 p-2">
                        <div class="card-wrapper">
                            <div class="service-card">
                                <h3>Business Site</h3>
                                <p>Professional web solutions for your business needs</p>
                                <button class="btn btn-outline-primary">Learn More</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-6 p-2">
                        <div class="card-wrapper">
                            <div class="service-card">
                                <h3>Portfolio Site</h3>
                                <p>Showcase your work with a stunning portfolio</p>
                                <button class="btn btn-outline-primary">Learn More</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-6 p-2">
                        <div class="card-wrapper">
                            <div class="service-card">
                                <h3>E-Commerce</h3>
                                <p>Launch your online store with ease</p>
                                <button class="btn btn-outline-primary">Learn More</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-6 p-2">
                        <div class="card-wrapper">
                            <div class="service-card">
                                <h3>Web App</h3>
                                <p>Custom web applications tailored to your needs</p>
                                <button class="btn btn-outline-primary">Learn More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    `
);
