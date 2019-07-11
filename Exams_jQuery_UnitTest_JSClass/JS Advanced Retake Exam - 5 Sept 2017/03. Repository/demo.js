function cityMarkets(arr) {

    let towns = new Map()
    for (let str of arr) {
        let [town, item, value] = str.split(/\s*->\s*/)
        let multiplay = value.split(/\s*:\s*/)
            .map(s => Number(s))
            .reduce((a,b) =>  a * b)
        if(towns.has(town)){
            if(towns.get(town).has(item)){
                towns.get(town).set(item, towns.get(item) + multiplay)
            }else{
                towns.get(town).set(item, multiplay)
            }

        }else{
            let itemsMap = new Map()
            itemsMap.set(item, multiplay)
            towns.set(town, itemsMap)

        }
    }

    for (let [key, value] of towns) {
        console.log('Town - ' + key)
        for (let [item, sum] of towns.get(key)) {
            console.log('$$$' + item + " : " + sum)
        }
    }
}

cityMarkets(['Sofia -> Laptops HP -> 200 : 2000',
'Sofia -> Raspberry -> 200000 : 1500',
'Sofia -> Audi Q7 -> 200 : 100000',
'Montana -> Portokals -> 200000 : 1',
'Montana -> Qgodas -> 20000 : 0.2',
'Montana -> Chereshas -> 1000 : 0.3'])

