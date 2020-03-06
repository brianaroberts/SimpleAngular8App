import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json", "Authorization": "c31z" })
  };

@Injectable()
export class BranchService {
    branches: any[];
  

    constructor (private httpClient: HttpClient) { 
        
    }

    getBranches() {
        //this.httpClient.get("assets/data/milSrvs.json", httpOptions).subscribe(data => 
        //   {
        //       this.branches = data;          
        //  }); 
        
        this.branches = BRANCHES
        
        return this.branches
    }

    getBranch(branchId:number) {
        let branches = this.getBranches(); 

        return branches.find(branch => branch.id === branchId)
    }
}

const BRANCHES = [
    { 
        "id": 1,
        "imageUrl": "/assets/images/Space_Force.png",
        "name": "Space Force",
        "motto": "May the Force be with you",        
        "yearFounded": 2019,
        "numPeople": 16000,
        "foundingPresident": "Donald Trump",
        "budget": "$15,400,000,000",
        "description": "The United States Space Force (USSF) is the space operations service branch of the United States Armed Forces, and is one of the eight U.S. uniformed services. The sixth and youngest branch of the U.S. Armed Forces, it was the first branch of the military established since the formation of the independent U.S. Air Force in 1947. The antecedent of the Space Force, Air Force Space Command, a major command of the U.S. Air Force, was formed on 1 September 1982 with responsibility for space warfare operations. The National Defense Authorization Act for 2020 redesignated Air Force Space Command as the U.S. Space Force, and established it as an independent branch of the U.S. Armed Forces on 20 December 2019.",
        "areaOfResponsibility": "Space,Cyberspace",
        "chiefOfStaff": "Gen John W. Raymond"
    },
    { 
        "id": 2,
        "imageUrl": "/assets/images/Air_Force.png",
        "name": "Air Force",
        "motto": "Aim High, Fly-Fight-Win",
        "yearFounded": 1947,
        "numPeople": 323222,
        "foundingPresident": "Harry S. Truman",
        "budget": "$102,800,000,000",
        "description": "The United States Air Force (USAF) is the aerial warfare service branch of the United States Armed Forces. It is one of the eight U.S. uniformed services. Initially formed as a part of the United States Army on 1 August 1907, the USAF was established as a separate branch of the U.S. Armed Forces on 18 September 1947 with the passing of the National Security Act of 1947. It is the second youngest branch of the U.S. Armed Forces, and the fourth in order of precedence. The U.S. Air Force articulates its core missions as air superiority, global integrated intelligence, surveillance, and reconnaissance, rapid global mobility, global strike, and command and control.",
        "areaOfResponsibility": "Air,Cyberspace",
        "chiefOfStaff": "Gen David L. Goldfein"
    },
    { 
        "id": 3,
        "imageUrl": "/assets/images/Marine_Corps.png",
        "name": "Marine Corps",
        "motto": "Semper Fidelis",
        "yearFounded": 1798,
        "numPeople": 184427,
        "foundingPresident": "John Adams",
        "budget": "$45,900,000,000",
        "description": "The United States Marine Corps (USMC), also referred to as the United States Marines, is a branch of the United States Armed Forces responsible for conducting expeditionary and amphibious operations with the United States Navy as well as the Army and Air Force. The U.S. Marine Corps is one of the eight uniformed services of the United States.",
        "areaOfResponsibility": "Land,Beaches",
        "chiefOfStaff": "Gen David H. Berger"
    },
    { 
        "id": 4,
        "imageUrl": "/assets/images/Navy.png",
        "name": "Navy",
        "motto": "Non sibi sed patriae",
        "yearFounded": 1794,
        "numPeople": 325802,
        "foundingPresident": "George Washington",
        "budget": "$161,800,000,000",
        "description": "The United States Navy (USN) is the naval warfare service branch of the United States Armed Forces and one of the eight uniformed services of the United States. It is the largest and most capable navy in the world and it has been estimated that in terms of tonnage of its active battle fleet alone, it is larger than the next 13 navies combined, which includes 11 U.S. allies or partner nations. It has the highest combined battle fleet tonnage and the world's largest aircraft carrier fleet, with eleven in service, two new carriers under construction, and five other carriers planned. With 336,978 personnel on active duty and 101,583 in the Ready Reserve, the U.S. Navy is the third largest of the U.S. military service branches in terms of personnel. It has 290 deployable combat vessels and more than 3,700 operational aircraft as of June 2019, making it the third-largest air force in the world, after the United States Air Force and the United States Army.",
        "areaOfResponsibility": "Sea",
        "chiefOfStaff": "ADM Michael M. Gilday"
    },
    { 
        "id": 5,
        "imageUrl": "/assets/images/Army.png",
        "name": "Army",
        "motto": "Army Strong",
        "yearFounded": 1784,
        "numPeople": 471513,
        "foundingPresident": "George Washington",
        "budget": "$146,900,000,000",
        "description": "The United States Army (USA) is the land warfare service branch of the United States Armed Forces. It is one of the eight U.S. uniformed services, and is designated as the Army of the United States in the U.S. Constitution. As the oldest and most senior branch of the U.S. military in order of precedence, the modern U.S. Army has its roots in the Continental Army, which was formed (14 June 1775) to fight the American Revolutionary War (1775–1783)—before the United States of America was established as a country. After the Revolutionary War, the Congress of the Confederation created the United States Army on 3 June 1784 to replace the disbanded Continental Army. The United States Army considers itself descended from the Continental Army, and considers its institutional inception to be the origin of that armed force in 1775.",
        "areaOfResponsibility": "Land",
        "chiefOfStaff": "GEN James C. McConville"
    },
    { 
        "id": 6,
        "imageUrl": "/assets/images/Coast_Guard.png",
        "name": "Coast Guard",
        "motto": "Semper Paratus",
        "yearFounded": 1915,
        "numPeople": 42042,
        "foundingPresident": "Woodrow Wilson",
        "budget": "$11,340,000,000",
        "description": "The United States Coast Guard (USCG) is the coastal defense, search and rescue, and maritime law enforcement branch of the United States Armed Forces and one of the country's eight uniformed services. The Coast Guard is a maritime, military, multi-mission service unique among the U.S. military branches for having a maritime law enforcement mission with jurisdiction in both domestic and international waters and a federal regulatory agency mission as part of its duties. It operates under the U.S. Department of Homeland Security during peacetime, and can be transferred to the U.S. Department of the Navy by the U.S. President at any time, or by the U.S. Congress during times of war. Congressional authority transfers happened twice: in 1917, during World War I, and in 1941, during World War II.",
        "areaOfResponsibility": "Homefront",
        "chiefOfStaff": "ADM Karl L. Schultz"
    }
]