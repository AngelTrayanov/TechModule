function solve(params) {
    let list = {};
    for (let param of params) {
        let tokens = param.split(' | ').filter(x => x !== '');
        let systemName = tokens[0];
        let componentName = tokens[1];
        let subcomponentName = tokens[2];
        if (!list.hasOwnProperty(systemName)) {
            let obj = {};
            obj[componentName] = [subcomponentName];
            list[systemName] = obj;
        } else {
            let currentSystem = list[systemName];
            if (!currentSystem.hasOwnProperty(componentName)) {
                currentSystem[componentName] = [subcomponentName];
            } else {
                let currentComponent = currentSystem[componentName];
                currentComponent.push(subcomponentName);
                currentSystem[componentName] = currentComponent;
            }
        }

    }
    console.log(list);
}

solve(['SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security'
]);