class Student {
    constructor(params) {
        this.fullName = params.fullName,
        this.university = params.university,
        this.course = params.course,
        this.birthDate = params.birthDate,
        this.photoUrl = params.photoUrl;
    }

    get birthDateStr() {
		let str = this.birthDate.getDay();
		let str1 = this.birthDate.getFullYear();
		return  str + ", " + str1 + "; " + this.age;
	}

	get age() {
		let nowDate = Date.now();
		let ageDate = nowDate - this.birthDate.getTime();
		let age = (new Date(ageDate).getFullYear()) - 1970;		
		return age;
    }
    
    get renderInfo(){
		let Space = document.createElement("div");
		Space.className = "allSpace";

		let baseDiv = document.createElement("div");
		baseDiv.className = "base_Div";				

		let name = document.createElement("p");
		name.appendChild(document.createTextNode(this.fullName));
        name.className = "base_Div-title";
        
        let birthDate = document.createElement("p");
        birthDate.appendChild(document.createTextNode(this.birthDateStr));
        
        let student_university = document.createElement("p");
        student_university.appendChild(document.createTextNode(this.university + ", " + this.course + " курс"));

        let img = document.createElement("div");
		img.className = "ava";
		img.style.backgroundImage =  "url('" + this.photoUrl + "')";

		let titleBD = document.createElement("span");
		titleBD.appendChild(document.createTextNode("День рождения"));
		titleBD.className = "base_Div-c_title";

		let titleStudent = document.createElement("span");
		titleStudent.appendChild(document.createTextNode("Учится"));
		titleStudent.className = "base_Div-c_title";
        
        let closeBT = document.createElement("button");
		closeBT.className = "close_btn";

		baseDiv.appendChild(name);
		baseDiv.appendChild(titleBD);
		baseDiv.appendChild(birthDate);

		baseDiv.appendChild(titleStudent);
		baseDiv.appendChild(student_university);

		baseDiv.appendChild(closeBT);
		baseDiv.appendChild(img);

		Space.appendChild(baseDiv);
		return Space;
	}

	get renderCard(){
		let baseDiv = document.createElement("div");
		baseDiv.className = "card";

		let img = document.createElement("img");
		img.src = this.photoUrl;

		let name = document.createElement("p");
		name.appendChild(document.createTextNode(this.fullName));
		name.className = "name";

		let student_university = document.createElement("p");
		student_university.appendChild(document.createTextNode(this.university + ", " + this.course + " курс"));
		student_university.className = "subname";

		baseDiv.appendChild(img);
		baseDiv.appendChild(name);
		baseDiv.appendChild(student_university);
		return baseDiv;
	}

	appendToDOM(index, DOM){
		let element = DOM.appendChild(index);	
		let that = this;
		element.addEventListener("click", (event) => { that.openCard(that.renderInfo); }  );
	}

	openCard(index){
		let body = document.getElementsByTagName("body")[0];
		body.appendChild(index);
		(index.getElementsByClassName("close_btn")[0]).addEventListener("click", (event) => { index.remove(); body.style.overflow = "auto"; body.style.marginRight = "0px";}  );
	}
  
}



