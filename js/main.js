$(document).ready(function(){
	const overlayBg = document.querySelector('#overlay');

	const formOpenButton = document.querySelectorAll('[data-btn]');
	const formsArray = document.querySelectorAll('[data-form]');
	const formCloseBtn = document.querySelectorAll('[data-close]');

	// ===== Показать блок с формой  ======
	for(let item of formOpenButton){
		item.addEventListener('click', function(e){
			e.preventDefault.default;
			let thisDataValue = item.dataset.btn;

			for(let i=0; i<formsArray.length; i++){

				let formDataValue = formsArray[i].dataset.form;

				if(thisDataValue == formDataValue){
					formsArray[i].classList.add('visible');
					overlayBg.classList.add('active');
				}
			}

		});
	}

	// =====Закрыть форму по клику на крестик ======
	for(let item of formCloseBtn){
		item.addEventListener('click', function(){
			item.closest('.form-block').classList.remove('visible');
			overlayBg.classList.remove('active');
		});
	}

	// ===== Закрыть форму по клику на фон-затемнение ======
	overlayBg.addEventListener('click', function(){
		for(let item of formsArray){
			item.classList.remove('visible');
			this.classList.remove('active');
		}
	});
	// ======== маска для телефона ============
		$(".phone").mask("+7(999)999-99-99");
		$.fn.setCursorPosition = function (pos) {
			if ($(this).get(0).setSelectionRange) {
				$(this).get(0).setSelectionRange(pos, pos);
			} else if ($(this).get(0).createTextRange) {
				var range = $(this).get(0).createTextRange();
				range.collapse(true);
				range.moveEnd('character', pos);
				range.moveStart('character', pos);
				range.select();
			}
		};
		$('input.phone').click(function () {
			$(this).setCursorPosition(3); // set position number
		});

	// ========= КАСТОМНЫЙ СЕЛЕКТ =============
	const customSelect = document.querySelector('.custom-select');
	customSelect.addEventListener('click', function(e){
		const thisList = customSelect.querySelector('.select-list');
		const thisInput = customSelect.querySelector('input');
		const thisListItem = customSelect.querySelectorAll('li');

		if(e.target.tagName == 'INPUT'){

			if(thisList.classList.contains('visible')){
				thisList.style.maxHeight = 0 + "px";
				thisList.classList.remove('visible');
				
			}else{
				thisList.classList.add('visible');
				thisList.style.maxHeight = thisList.scrollHeight + "px";
			}				
		}

		if(e.target.tagName == 'LI'){
			for(let item of thisListItem){
				item.classList.remove('current');
			}
			const curItemValue = e.target.dataset.role;
			thisInput.value = curItemValue;
			e.target.classList.add('current');
			thisList.style.maxHeight = 0 + "px";
			thisList.classList.remove('visible');
		}
	});

	// ==========ТАБЫ==============
	const tabBtn = document.querySelectorAll('[data-tab]');
	const tabContent = document.querySelectorAll('[data-content]');
	for(let i=0; i < tabBtn.length; i++){
		tabBtn[i].addEventListener('click', function(e){
			e.preventDefault();
			
			for(let btn of tabBtn){
				btn.classList.remove('active');
			}
			this.classList.add('active');
			const thisData = tabBtn[i].dataset.tab;

			for(let item of tabContent){
				item.classList.remove('active');
				const itemData = item.dataset.content;
				if(itemData == thisData){
					item.classList.add('active');
				}
			}
		})
	}
	// Tab text switch
	function tabSwitch(){
		const navMenu = document.querySelector('#user-profile-nav-menu');
		// Check for the right page and resolution
		if(navMenu && window.innerWidth < 768){
			// Elements
			const header = document.querySelector('#active-title');
			const tabs = document.querySelectorAll('[data-tab]');
			const activeTab = document.querySelector('button.active[data-tab]');
	
			// Initial header name
			header.innerText = activeTab.innerText;
		
			// On click set the header text
			tabs.forEach((el)=>{
				const tabName = el.querySelector('span.text-small').innerText;
				el.addEventListener('click', ()=>{header.innerText = tabName});
			});
		}
	}
	
	tabSwitch();
	window.addEventListener('resize', ()=>tabSwitch());
})