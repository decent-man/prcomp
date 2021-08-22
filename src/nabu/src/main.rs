//         __      __  __  ___ __  
//    |  ||__) /\ |__)|__)|__ |__) 
//    |/\||  \/~~\|   |   |___|  \ 
//                      src/main.rs
//                       - A frontend wrapper for the underlying scraper.


mod orel;
mod scrape;
use std::fs::File;
use std::io::{BufRead,BufReader};
use std::env;
use std::thread;
use std::future::Future;

// == Global Variables
const CATEGORY_DIR: &str = "./cnp/categories";
const PROFILE_DIR: &str = "./cnp/profiles";
const CONFIG_EXTENSION: &str = "orel";

// Common function for opening files
fn fopen(fname: &String) -> File {
    match File::open(fname) {
        Err(why) => panic!("Couldn't open {},\nbecause {}",fname,why),
        Ok(file) => file,
    }
}

// Function that fetches the list of website by category.
fn read_category(file_name: &str) -> Vec<String>{
    let category_file = fopen(&format!("{}/{}",CATEGORY_DIR,file_name));
    let mut website_list = Vec::new();
    for website in BufReader::new(category_file).lines().map(|line| line.unwrap()) {
        website_list.push(format!("{}.{}",website,CONFIG_EXTENSION))
    }
    website_list
}

// Function to read the websites profiles
fn read_profiles(website_list: Vec<String>)  -> Vec<orel::Orel<String>> {
    let mut nabu_index: Vec<orel::Orel<String>> = Vec::new();
    for website_file in website_list.iter() {
        //println!("Website Configuration is:\n{:?}",orel::parse_orel(&format!("{}/{}",PROFILE_DIR,website_file))); // VERBOSE
        nabu_index.push(orel::parse_orel(&format!("{}/{}",PROFILE_DIR,website_file)));
    }
    nabu_index
}
// Alt Function to parallely read website profiles
fn read_profile(website_profile: &String) -> orel::Orel<String> {
        orel::parse_orel(&format!("{}/{}",PROFILE_DIR,website_profile))
}

// Call the program as `nabu <CATEGORY> <SEARCH_QUERY>`
fn main() {
    let arguments: Vec<String> = env::args().collect();
    let category: &String = &arguments[1];
    let search_query: &[String] = &arguments[2..];
    let site_list = read_category(category);
    for i in 0..site_list.len() { // Spawn a thread for each concurrent website
        thread::spawn(move || {
            read_profile(&site_list[i]);
        });
    }
    //println!("Category: {}\nQuery: {:?}\nCategory File Says: {:#?}", category,search_query,read_category(category)); // Verbose Output
    //println!("Website Configuration is:\n{:#?}",read_profiles(read_category(category)));
    //println!("{}",scrape::make_request("https://www.amazon.in/s?k=mac+m1").unwrap());
    //scrape::stage_one(&scrape::make_request("https://www.flipkart.com/search?q=m1%20macbook").unwrap());
    //scrape::stage_one(&scrape::make_request("https://www.myntra.com/kurta-for-men?plaEnabled=false&rf=Price%3A319.0_2240.0_319.0%20TO%202240.0").unwrap());
    //scrape::stage_one(&scrape::make_request("https://www.myntra.com").unwrap());
    //scrape::stage_one(&scrape::make_request("https://www.ajio.com/search/?text=black+sneakers").unwrap());
    scrape::stage_one(&scrape::make_request("https://www.urbanladder.com/products/search?utf8=%E2%9C%93&keywords=queen+size+bed").unwrap());
}
