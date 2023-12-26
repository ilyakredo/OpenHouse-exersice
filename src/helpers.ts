import IHome from "./interfaces/IHome";

export function calculateAverageHomePrice(communityId: String, homes: IHome[]): String {
    
    const communityHomes = homes.filter(home => home.communityId === communityId);
    const totalPrice = communityHomes.reduce((sum, home) => sum + home.price, 0);
    const averagePrice = communityHomes.length > 0 ? Math.floor(totalPrice / communityHomes.length) : 0;

    return averagePrice.toLocaleString();
}