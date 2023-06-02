chrome.runtime.onInstalled.addListener(() => {
	chrome.contextMenus.create({
		id: 'chamarNoZap',
		title: 'Chamar "%s" no Whatsapp Web',
		type: 'normal',
		contexts: ['selection'],
	});

	chrome.contextMenus.onClicked.addListener(({ selectionText }) => {
		const formattedNumber = selectionText;
		const whatsappWebBaseURL = 'https://web.whatsapp.com/send';
		const content = '';
		chrome.tabs.create({
			url: `${whatsappWebBaseURL}/?phone=${formattedNumber}type=phone_number&text=${content}`
		});
	})
});
