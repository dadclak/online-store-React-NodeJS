import { makeAutoObservable } from 'mobx';

export default class DeviceStore {
    constructor() {
        this._types = [
            { id: 1, name: 'Fridge' },
            { id: 2, name: 'smartphone' },
            { id: 3, name: 'Laptop' },
            { id: 4, name: 'TV' },
        ]

        this._brands = [
            { id: 1, name: 'Apple' },
            { id: 2, name: 'Samsung' },
            { id: 3, name: 'LG' },
            { id: 4, name: 'Xiaomi' },
        ]

        this._devices = [
            { id: 1, name: '12 pro', price: 1100, rating: 4, img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-pro-max-gold-hero?wid=470&hei=556&fmt=jpeg&qlt=95&.v=1604021660000' },
            { id: 2, name: 'MacBook Pro', price: 4200, rating: 5, img: 'https://idared-serwis.pl/wp-content/uploads/2019/03/macbook-pro-2018-1-1024x576.jpg' },
            { id: 3, name: 'Samsung m34F', price: 1879, rating: 5, img: 'https://photo2.tinhte.vn/data/attachment-files/2021/01/5287250_samsung-oled-laptops-2021-1.jpg' },
            { id: 4, name: 'Samsung LF45', price: 1290, rating: 3, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnRC16hyiV54Ho2wlddzk1usfJi64RWDUz6A&usqp=CAU' },
            { id: 5, name: '12 pro', price: 1100, rating: 4, img: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-pro-max-gold-hero?wid=470&hei=556&fmt=jpeg&qlt=95&.v=1604021660000' },
            { id: 6, name: 'MacBook Pro', price: 4200, rating: 5, img: 'https://idared-serwis.pl/wp-content/uploads/2019/03/macbook-pro-2018-1-1024x576.jpg' },
            { id: 7, name: 'Samsung m34F', price: 1879, rating: 5, img: 'https://photo2.tinhte.vn/data/attachment-files/2021/01/5287250_samsung-oled-laptops-2021-1.jpg' },
            { id: 8, name: 'Samsung LF45', price: 1290, rating: 3, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnRC16hyiV54Ho2wlddzk1usfJi64RWDUz6A&usqp=CAU' },
        ]

        this._selectedType = {}
        this._selectedBrand = {}

        makeAutoObservable(this)
    }

    setTypes(types) {
        this.types = types
    }

    setBrands(brands) {
        this._brands = brands
    }

    setDevices(devices) {
        this._devices = devices
    }

    setSelectedType(type) {
        this._selectedType = type
    }

    setSelectedBrand(brand) {
        this._selectedBrand = brand
    }

    get types() {
        return this._types
    }

    get brands() {
        return this._brands
    }

    get devices() {
        return this._devices
    }

    get selectedType() {
        return this._selectedType
    }

    get selectedBrand() {
        return this._selectedBrand
    }
}