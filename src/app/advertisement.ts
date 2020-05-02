export class Advertisement{
    id: number;
    pinCode: number;
    name: string;
    state: string;
    propertyType: string;
    area: string;
    active: boolean;
    postDate:number;


    public getpinCode ():number {
		return this.pinCode;
	}

	public setpinCode(pinCode:number) {
		this.pinCode = pinCode;
    }
    
    public getname ():string {
		return this.name;
    }
    public setname(name:string) {
		this.name = name;
    }
    public getstate ():string {
		return this.state;
    }
    public setstate(state:string) {
		this.state = state;
    }
    public getpropertyType ():string {
		return this.propertyType;
    }
    public setpropertyType(propertyType:string) {
		this.propertyType = propertyType;
    }
    public getarea ():string {
		return this.area;
    }
    public setarea(area:string) {
		this.area = area;
    }
    public getactive ():boolean {
		return this.active;
    }
    public setactive(active:boolean) {
		this.active = active;
    }
    

}