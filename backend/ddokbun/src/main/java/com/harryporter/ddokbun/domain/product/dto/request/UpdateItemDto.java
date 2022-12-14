package com.harryporter.ddokbun.domain.product.dto.request;


import com.harryporter.ddokbun.domain.plant.entity.Plant;
import com.harryporter.ddokbun.domain.product.entity.Item;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
public class UpdateItemDto {
    private long itemSeq;
    //상품명
    private String itemName;
    //가격
    private int itemPrice;
    //설명
    private String itemInfo;
    //재고
    private  int itemStock;
    //사진
    private String itemPicture;
    //1이면 식물
    //2이면 화분 등등의 상품들
    private int itemKind;

    private long plantSeq;

    public static UpdateItemDto of(Item item){
        return UpdateItemDto.builder()
                .itemInfo(item.getItemInfo())
                .itemKind(item.getItemKind())
                .itemPrice(item.getItemPrice())
                .itemStock(item.getItemStock())
                .itemName(item.getItemName())
                .itemPicture(item.getItemPicture())
                .build();
    }

    public Item toEntity(Plant plant){
        return Item.builder()
                .itemName(itemName)
                .itemPrice(itemPrice)
                .itemInfo(itemInfo)
                .itemStock(itemStock)
                .itemPicture(itemPicture)
                .itemKind(itemKind)
                .plant(plant)
                .build();
    }


}
