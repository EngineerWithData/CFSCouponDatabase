<h1 align="center">
  Cold-Formed Steel (CFS) Material Databae
</h1>

## What is inside

<p>This repository stores over 200 cold-formed steel coupon test curves. 

We save the data as a json file at [here](./data/all-data.json) in the data folder.

This repository comes with a data viewer. You can use the viewer at the www.cfs-database.com.

Or you clone this repository to run locally by running the following command
    
    git clone https://github.com/cding91/gatsby-cfs.git
    cd gatsby-cfs/
    gatsby develop

Visit the data viewer at http://localhost:8000

##Motivation

Every structural steel research project starts with tensile coupon tests. 
Over the years, too many coupons have been pulled but few data have been collected. 
This database aims to change that.

As a side project from a NSF funded research project, this database hosts over 200 stress-strain curves from coupon tests conducted in the Thin-Walled Structures Lab at the Johns Hopkins University. 
In addition to data of conventional mild steel, the latest coupon data of advanced strength steel (AHSS), the next generation construction steel, are also included. We hope this database can provide structural steel researchers with valuable data for future research.

##References
* Xia, Y., Ding, C., Li, Z., Schafer, B. W., and Blum, H. B. 2021. “Numerical modeling of stress-strain relationships for advanced high strength steels.” Journal of Constructional Steel Research, 182, 106687. https://doi.org/10.1016/j.jcsr.2021.106687.
* Ayhan, D., and Schafer, B. W. 2015. “Cold-formed steel member bending stiffness prediction.” Journal of Constructional Steel Research, 115, 148–159. https://doi.org/10.1016/j.jcsr.2015.07.004.
* Tao, F., Chatterjee, A., and Moen, C. D. 2016. Monotonic and cyclic response of single shear cold-formed steel-to-steel and sheathing-to-steel connections. Virginia Tech Research Report No. CE/VPI-ST-16/01, Blacksburg, VA.
* Torabian, S., Fratamico, David. C., and Schafer, B. W. 2016. “Experimental response of cold-formed steel Zee-section beam-columns.” Thin-Walled Structures, 98, 496–517. https://doi.org/10.1016/j.tws.2015.10.016.
