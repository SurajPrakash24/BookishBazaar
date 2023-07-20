import logo from '../assets/logo.png';

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer class="footer-distributed">

			<div class="footer-left">

				<img src={logo} alt='BookishBazaar' style={{ width: '40%', height: '2%' }} />

				<p class="footer-links">
					<a href="/" class="link-1">Home</a>
					<a href="/cart">Cart</a>
					<a href="#latestprod">Products</a>
				</p>
				<p class="footer-company-name">BookishBazaar &copy; {currentYear}</p>
			</div>

			<div class="footer-center">

				<div>
					<i class="fa fa-map-marker"></i>
					<p><span>Vellore Institute of Technology</span> Vellore, India</p>
				</div>

				<div>
					<i class="fa fa-phone"></i>
					<p>+91-1234561230</p>
				</div>

				<div>
					<i class="fa fa-envelope"></i>
					<p><a href="mailto:surajprakashhh04@gmail.com">support@bookishbazaar.com</a></p>
				</div>

			</div>

			<div class="footer-right">

				<p class="footer-company-about">
					<span>About the company</span>
					The BookishBazaar is an online marketplace where we provide a wide range of books at reasonable costs. We as a company care our customers and always there to help you.
				</p>

				<div class="footer-icons">

					<a href="/"><i class="fa fa-facebook"></i></a>
					<a href="/"><i class="fa fa-instagram"></i></a>
					<a href="/"><i class="fa fa-linkedin"></i></a>
					<a href="/"><i class="fa fa-github"></i></a>

				</div>
			</div>
		</footer>
	);
};
export default Footer;