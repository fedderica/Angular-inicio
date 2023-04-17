@Component({
    selector: 'app-shopping-item',
    templateUrl: './shopping-item.component.html',
    styleUrls: ['./shopping-item.component.css']
})
//Decorador//

@Input() total:number = 0;
@Input() mensaje:string = '';
items: Item[];

deleteItem(item:Item):Observable<Item>{
    
}