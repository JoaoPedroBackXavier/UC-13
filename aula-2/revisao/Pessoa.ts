export class pessoa{
    private name : string;
    private age : number;

	constructor(name: string, age: number) {
		this.name = name;
		this.age = age;
	}


    /**
     * Getter $name
     * @return {string}
     */
	public get $name(): string {
		return this.name;
	}
    
    /**
     * Getter $age
     * @return {number}
     */
	public get $age(): number {
		return this.age;
	}

    /**
     * Setter $name
     * @param {string} value
     */
	public set $name(value: string) {
		this.name = value;
	}

    /**
     * Setter $age
     * @param {number} value
     */
	public set $age(value: number) {
		this.age = value;
	}



}