export class FoodDetailStoreService {
    private food;

    public setFoodInfos(food) {
        this.food = food;
    }

    public getFoodInfos() {
        return this.food;
    }
}
