package com.harryporter.ddokbun.domain.product.service;

import com.harryporter.ddokbun.domain.product.dto.request.InsertItemDto;
import com.harryporter.ddokbun.domain.product.dto.ItemDto;
import com.harryporter.ddokbun.domain.product.dto.request.UpdateItemDto;
import com.harryporter.ddokbun.domain.product.dto.response.ItemDetailDto;
import com.harryporter.ddokbun.domain.product.dto.response.ItemSearchDto;
import com.harryporter.ddokbun.domain.product.dto.response.ItemSimpleSearchDto;

import java.util.List;

public interface ItemService {

    List<ItemSearchDto> searchByTitle(String title);
    List<ItemSimpleSearchDto> simpleSearchByTitle(String title);

    ItemDetailDto getOneItemById(Long ItemSeq);

    List<ItemSearchDto> getTodayRecommendItem();
    int decreaseQuantity(long itemSeq,int quantity);


    ItemDto insertItem(InsertItemDto insertItemDto);

    ItemDetailDto updateItem(UpdateItemDto updateItemDto);


    String deleteItem(long itemSeq);

    List<Long> getProductList();

    List<ItemDto> getProductByCategory(String category);
}
