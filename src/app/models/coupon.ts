export class Coupon {

    public constructor(
        public id?: number,
        public title?: string,
        public startDate?: Date,
        public endDate?: Date,
        public category?: Category,
        public amount?: number,
        public message?: string,
        public price?: number,
        public imageURL?: string
    ) { }
}

export enum Category {
    TRAVELING = 1,
    FOOD = 2,
    ELECTRICITY = 3,
    HEALTH = 4,
    SPORTS = 5,
    CAMPING = 6,
    FASHION = 7,
    STUDIES = 8

}