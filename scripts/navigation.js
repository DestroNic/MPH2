
var pageRender = document.getElementById('render-wrapper');




const home = () => {
    pageRender.innerHTML = `
    <div class="main-content-wrapper">
    <img src="./assets/images/Logo-TRNSP-HQ.png" alt="Logo">
    <p>MPH Technology Solutions is your premier technology partner to keep your business ahead in this fast-paced world.</p>
    </div>
    <div class="learn-more-wrapper">
    <a href="#" onclick="about();">LEARN MORE</a>
    </div>
    `;
}

const about = () => {
    pageRender.innerHTML = `
    <div class="about-wrapper">
        <div class="about-title-wrapper">
            <p>ABOUT US</p>
        </div>
        <div class="about-main-content">
            <img src="../assets/images/about-image.jpg" alt="Macbook pro">
            <div class="mission-statement">
                <p class="ms-title">OUR MISSION STATEMENT</p><br>
                <p>
  
                MPH Technology Solutions is your premier technology partner to keep your business ahead in this fast-paced world. We have experienced architects, engineers, and designers that have over 25 years of experience in supporting startups to large fortune 500 companies with over 200,000 employees in many different industries.<br><br>
                
                We provide the skill set to provide best-in-class service in many different services from software development to public cloud operations. Our staff uses the most reliable and cutting edge technology in modern automation and practice the best of current standards to ensure that not only do you receive the best technology experience but also meet the top security standards in the process.
                </p>
            </div>
        </div>
    </div>
    `;
}

const services = () => {
    
    

    pageRender.innerHTML = `
    <div class="services-wrapper">
            <div class="services-title-wrapper">
                <p>SERVICES</p>
            </div>
            <div class="services-main-content">
                <div class="services-sub-nav">
                    <a href="#" onclick="webDev();">WEB DEVELOPMENT</a>
                    <a href="#" onclick="kubernetes();">KUBERNETES MANAGEMENT</a>
                    <a href="#" onclick="automation();">AUTOMATION</a>
                    <a href="#" onclick="cloud();">CLOUND ENGINEERING AND MANAGEMENT</a>
                    <a href="#" onclick="security();">SECUTIRY</a>
                </div>
                <div id="service-render"></div>
                
    </div>
    `;
    
    

    webDev();

    
    


}

//Sub-Navigation items

const webDev = () => {
    document.getElementById('service-render').innerHTML = `
        <div class='service-sub-wrapper'>
            <div class='service-image'>
                <img src='../assets/images/webdev.jpg' alt='webdev'>
            </div>
            <div class='service-text'>
                <h2>Web Development</h2>
                <p>MPH Tech provides custom web development & Hosting for any type of web application, Mobile or Backend. We apply the most secure and best practices to ensure your web application meets your needs and scales with demand. </p>
            </div>
        </div>
    `;
}

const kubernetes = () => {
    document.getElementById('service-render').innerHTML = `
        <div class='service-sub-wrapper'>
            <div class='service-text'>
                <h2>Kubernetes</h2>
                <p>Kubernetes Management and Deployment using AWS EKS, Azure AKS or Google GCP, or On-Prem Private Cloud. We provide the best expertise in helping you be successful with migrating and running workloads in Kubernetes. </p>
            </div>
            <div class='service-image'>
            <img src='../assets/images/kubernetes.jpg' alt='Kubernetes'>
            </div>
        </div>
    `;
}

const automation = () => {
    document.getElementById('service-render').innerHTML = `
        <div class='service-sub-wrapper'>
            <div class='service-image'>
                <img src='../assets/images/automation.jpg' alt='Automation'>
            </div>
            <div class='service-text'>
                <h2>Automation</h2>
                <p>Our developers can assist in automating any part of your business, allow us to help you speed up processes, turn manual tasks into automation! </p>
            </div>
        </div>
    `;
}

const cloud = () => {
    document.getElementById('service-render').innerHTML = `
        <div class='service-sub-wrapper'>
            <div class='service-text'>
                <h2>Clour Engineering and Management</h2>
                <p>Our Site Reliability Engineers can help your business get a handle on management of your Public Cloud accounts. We can assist with Account management, Infrastructure Design, Code Deployment, Security & Cost Optimization. Take advantage of our Cloud Management tools to take control over your Applications in the cloud.</p>
            </div>
            <div class='service-image'>
                <img src='../assets/images/cloud.jpg' alt='cloud'>
            </div>
        </div>
    `;
}

const security = () => {
    document.getElementById('service-render').innerHTML = `
        <div class='service-sub-wrapper'>
            <div class='service-image'>
                <img src='../assets/images/security.jpg' alt='Security'>
            </div>
            <div class='service-text'>
                <h2>Security</h2>
                <p>In today's world where security breaches are a common occurrence, staying in front of your organization's security posture is becoming harder every day. We can boost your confidence that your Infrastructure, critical business operations are fully secured. We can provide the tools, visibility and assurance that you can focus on your business objectives.</p>
            </div>
        </div>
    `;
}


const contact = () => {
    pageRender.innerHTML = `
        <h1>CONTACT US<h1>
    `;
}