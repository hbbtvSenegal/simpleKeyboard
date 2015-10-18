require.def("calculatrice/static/composants/clavier",
	[
		"antie/widgets/keyboard"
	],
	function(KeyBoard){

		return KeyBoard.extend({
			init: function(id, col,row,typeClavier){
				var self = this;
				var key = this._keys(typeClavier);

				this._super(id,col,row,key);
			},
			_alpha: [
				"a","b","c","d","e","f","g",
				"h","i","j","k","l","m",
				"n","o","p","q","r","s","t",
				"u","v","w","x","y","z"
			],
			_num:[
				"SPACE","0","1","2","3","4",
				"5","6","7","8","9","DEL"
			],
			_alphanum:[
			"SPACE","a","b","c","d","e","f","g","0","1","2",
			"DEL","h","i","j","k","l","m","n","3","4","5",
			".","o","p","q","r","s","t","u","7","8","9",
			";","v","w","x","y","z",",","+","*","/","-",
			"!","?"
				
			],

			_keys: function(typeClavier){
				var res = [];
				switch(typeClavier){
					case "alpha":
						res=this._alpha;
						break;
					case "alphanum":
						res= this._alphanum;
						break;
					case "num":
						res = this._num;
						break;

				}

				return res;
			}

		});
	}

);