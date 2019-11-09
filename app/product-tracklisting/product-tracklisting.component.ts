import { Component, OnInit } from '@angular/core';
import { AlbumStorePage } from '../../../e2e/app.po';

@Component({
  selector: 'app-product-tracklisting',
  templateUrl: './product-tracklisting.component.html',
  styleUrls: ['./product-tracklisting.component.css']
})

import { ProductService } from '../product.service';

import { Album } from '../album';
export class ProductTracklistingComponent implements OnInit {
  albumInfo: Album;

  constructor(private _productService: ProductService) { }

  ngOnInit() {
    this._productService.getAlbum(1).subscribe(response => this.albumInfo = response);
  }

}
