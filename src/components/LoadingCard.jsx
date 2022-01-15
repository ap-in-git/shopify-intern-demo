import {Card, SkeletonBodyText, SkeletonDisplayText, SkeletonThumbnail} from "@shopify/polaris";

const LoadingCard = () => {
    return (
        <Card>
            <div  className={"Loading-card__Container"} >
                <SkeletonThumbnail/>
                <div className={"Loading-card__ContentWrapper"}>
                    <div style={{marginBottom:20}}>
                        <SkeletonDisplayText size="small" />
                    </div>
                    <SkeletonBodyText lines={12}/>
                </div>
            </div>
        </Card>
    )
}
export default LoadingCard;