import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GuideService {

  constructor() { }

  getGuides() {
    return {
      "Guide": [
        {
          "Problem": "Are you Hurricane prepared",
          "Answer": "1. Make a family Disaster plan and practice it with your family members. 2. Locate your nearest Evacuation shelter camps.3. Register for special needs and pet-friendly shelters if applicable.4. Inspect and perform check on your windows and put on plywood coverings, panels or shutters for protection.5. Inspect your house for any conditions which may allow wind damage.6. Complete and assemble your emergency supply kit.7. Check your surroundings for trees which might be a threat to your house and take necessary actions."
        },
        {
          "Problem": "Healthcare for home and home-bound patients",
          "Answer": "1. Notify a health agency about your location if you are in need of any special assistance.2. Remember to take the medication, written instructions about your care and other special equipment if necessary.3. If you require hospitalization, you must make prior arrangements through your physician."
        },
        {
          "Problem": "Pet Safety",
          "Answer": "1. Have a pet preparedness kit.2. Make sure your pet has a collar with a contact name and phone number.3. Have a plan for your pets if you are evacuating and not taking them with you.  Have them stay with friends or family who are not evacuating, or board them with a local facility or your veterinarian.4. Arrange for a neighbor to check on and take care of your pets care if a storm occurs while you are away.5. Contact pet friendly shelters for more information."
        },
        {
          "Problem": "Evacuate or stay",
          "Answer": "1. It is important to note that All residents living in a manufactured/mobile home or substandard housing must evacuate In a hurricane warning."
        },
        {
          "Problem": "Things to do before we leave the house",
          "Answer": "1. Place all the brittle items safely in a box with some protection on it.2. Move the mirrors and lamps in blankets and place them in a shower.3. Shut off utilities and disconnect electricity, sewer and water lines. Shut off propane tanks and leave them outside after anchoring them securely.4. Place all the outdoor furniture and items inside in a safe spot."
        },
        {
          "Problem": "Things to carry to a shelter",
          "Answer": "1. Three day supply of water per person.2. Prescription and emergency medications you need.3. Comfortable Clothing and Bedding materials.4. Flash light, Power banks and extra batteries.5. Radio with extra batteries and headphones.6. Toiletries and personal hygiene items.7. Chargers or cables for any electronic items you bring with you."
        },
        {
          "Problem": "During a watch",
          "Answer": "1. Turn on TV and Radio to get continuous updates.2. Review your evacuation plan.3. Contact with friends and family members to coordinate the storm preparation.4. Place important documents in a safe location in waterproof bags.5. Fill-up drinking water containers.6. Secure outdoor gates.7. Reinforce the garage door.8. Stay away from windows and always keep a flashlight near you.9. Unplug all smart appliances.10. Be alert for tornadoes which are often spawned by hurricanes."
        },
        {
          "Problem": "If your home gets damaged during the storm",
          "Answer": "1. Stay away from the windows and doors even if they are covered.2. Close all interior doors and take refuge in a small room, closet or hallway.3. Secure and brace the external doors. 4. If you are in a multi-story building and away from water, go to the first or second floors and take refuge in interior rooms away from windows.5. Lie on the floor under a table or another sturdy object."
        },
        {
          "Problem": "Road Safety after the storm",
          "Answer": "1. With the storm debris on the road it would extremely difficult to drive, traffic signals that aren’t working, signs that are down, flooding and downed power lines.2. Do not drive unless absolutely necessary.  Drive slowly and approach all intersections with extreme caution. Treat intersections missing/non-working traffic signals or missing stop signs as a four-way stop.3. Obey curfews. They are mandatory and will be re-evaluated daily.  Anyone out during curfew could be subject to arrest.4. If the power is out and the signal is dark, the intersection should be treated as a four-way stop."
        },
        {
          "Problem": "Re-entry to the house",
          "Answer": "1. Wear sturdy shoes and do not enter if there is water around the building.2. If you feel a building is not safe, do not enter and call a contractor or engineer.3. Check gas, water and electrical appliances for damage.4. Check for sewage and water line damage. Do not use if you think there is damage.5. Open windows and doors to ventilate and dry your home or business.6. If you suspect a gas leak, leave immediately and call 9-1-1 or your natural gas provider from a safe location.7. If your home or business has been flooded, have a qualified licensed electrician inspect the electrical system and appliances before turning the power back on.8. Let your out-of-town contact know you are alright.9. Keep listening to NOAA Weather Radio or local radio and TV stations for instructions.10. Use flashlights in the dark; DO NOT use candles.11. Standing water may be electrically charged from underground or downed power lines.12. Do not drink or prepare food with tap water until you are certain it is not contaminated.13. Use the telephone to report life-threatening emergencies only.14. Avoid loose or dangling power lines and report them."
        }
      ]
    }
  }
}
