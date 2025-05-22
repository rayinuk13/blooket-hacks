(async () => {
    let n = document.createElement('iframe');
    document.body.append(n);
    window.alert = n.contentWindow.alert.bind(window);
    window.prompt = n.contentWindow.prompt.bind(window);
    window.confirm = n.contentWindow.confirm.bind(window);
    n.remove();
            function reactHandler() {
                return Object.values(document.querySelector('#app > div > div'))[1].children[1]._owner;
            };

            if (!window.location.pathname.split('/').includes('lobby')) return alert('You must be in a game lobby! (e.g. https://www.blooket.com/play/lobby)');

            reactHandler().stateNode.setState({ lockedBlooks: [], takenBlooks: [] });
            alert('Blooks unlocked!');
})();
