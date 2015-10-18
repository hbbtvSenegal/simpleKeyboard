require.def("calculatrice/js/app", 
	[ 
		"antie/widgets/component", 
		"calculatrice/static/composants/bouton", 
		"antie/widgets/container", 
		"antie/widgets/verticallist", 
		"antie/widgets/horizontallist", 
		"antie/widgets/label",
		//"antie/widgets/horizontalcarousel",
		"calculatrice/static/composants/carouselhorizontal",
		"calculatrice/static/composants/texte",
		"calculatrice/static/composants/clavier"
	], 
	function(Component,
		Bouton, 
		Container,
		VerticalList,
		HorizontalList, 
		Label, 
		HorizontalCarousel, 
		Texte,
		Clavier
		){ 
		return Component.extend({ 
			init: function(){ 
			var self = this; 
			this._super("appcalculatrice"); 



			//l'application
			this._application = this.getCurrentApplication();
			this._device = this._application.getDevice();

			var clavier = new Clavier("clavier",11,4, "alphanum");

			//zone de saisie
			var afficheComponent = new Component("afficheComponent");
			var afficheTexte = new Texte("afficheTexte");
			afficheComponent.appendChildWidget(afficheTexte);

			this.addEventListener("select", function(evt){
				afficheTexte.setText(clavier.getText());
			});

			self.appendChildWidget(afficheComponent);
			self.appendChildWidget(clavier);

			}
		}); 
	} 
); 

