const header = document.querySelector('header');
const footer = document.querySelector('footer');

// Obtén el año actual
var ActualYear = new Date().getFullYear();

header.innerHTML = `
<a name="topUp"/>
		<div class="menu_bar" id="top">
			<div class="back-black"></div>
			<div class="contenedor_logo">
				<a href="/">
					<img src="images/horizontal_mgd.svg" alt="Identificador Miguel Gómez">
				</a>
			</div>
			<ul>
				<li><a href="#mi_trabajo">Mi trabajo</a></li>
				<li><a href="#sobre_mi">Sobre mí</a></li>
				<li id="link_facebook">
					<a href="https://www.facebook.com/miguelgomezdesigner" target="_blank">
						<div id="facebook_icon_h"></div>
					</a>
				</li>
				<li id="link_instagram">
					<a href="https://www.instagram.com/miguelgomezdesigner/" target="_blank">
						<div id="instagram_icon_h"></div>
					</a>
				</li>
			</ul>
		</div>
`;

footer.innerHTML = `
<div class="hr"></div>
		<div class="cont_footer">
			<a href="/">
				<div id="cont_id"><img src="images/mgd_v_n_gris.svg" alt="Identificador Miguel Gómez vertical"></div>
			</a>
			<div id="hr_v"></div>
			<div id="txt_footer">
				<div class="cont_txt_footer">
					<div class="cont_redes_footer">
						<h3>Sígueme en:</h3>
						<a href="https://www.facebook.com/miguelgomezdesigner" target="_blank">
							<div class="cont_2_footer">
								<div id="facebook_icon_footer"></div>
								<h4>Miguel Gómez Designer</h4>
							</div>
						</a>
						<a href="https://www.instagram.com/miguelgomezdesigner/" target="_blank">
							<div class="cont_2_footer">
								<div id="instagram_icon_footer"></div>
								<h4>@miguelg01101</h4>
							</div>
						</a>
					</div>
				</div>
			</div>
		</div>
		<div id="copyright">
			<h6>Copyright © Miguel Gómez – ${ActualYear}.</h6>
		</div>
`;