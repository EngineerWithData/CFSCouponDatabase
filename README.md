<h1 align="center">
  Cold-Formed Steel (CFS) Material Databae
</h1>

## What is inside

<p>This repository stores hundres of cold-formed steel coupon test curves. 

We save the data as a json file at [here](./data/all-data.json) in the data folder. 

Note that the stress-strain curves stored in the json file have been reduced to less than 75 data points to be loadable in browser.

This repository comes with a data viewer. You can use the viewer at the www.cfs-database.com.

Or you clone this repository to run locally by running the following command
    
    git clone https://github.com/cding91/gatsby-cfs.git
    cd gatsby-cfs/
    gatsby develop

Visit the data viewer at http://localhost:8000

## Motivation

Every structural steel research project starts with tensile coupon tests. 
Over the years, too many coupons have been pulled but few data have been collected. 
This database aims to change that.

As a side project from a NSF funded research project, this database hosts over 200 stress-strain curves from coupon tests conducted in the Thin-Walled Structures Lab at the Johns Hopkins University. 
In addition to data of conventional mild steel, the latest coupon data of advanced strength steel (AHSS), the next generation construction steel, are also included. We hope this database can provide structural steel researchers with valuable data for future research.

## References
* Xia, Y., Ding, C., Li, Z., Schafer, B. W., and Blum, H. B. 2021. “Numerical modeling of stress-strain relationships for advanced high strength steels.” Journal of Constructional Steel Research, 182, 106687. https://doi.org/10.1016/j.jcsr.2021.106687.
* Ayhan, D., and Schafer, B. W. 2019. “Cold-formed steel ledger-framed construction floor-to-wall connection behavior and strength.” Journal of Constructional Steel Research, 156, 215–226. https://doi.org/10.1016/j.jcsr.2019.01.021.
* Fratamico, D. C., Torabian, S., Zhao, X., Rasmussen, K. J. R., and Schafer, B. W. 2018a. “Experiments on the global buckling and collapse of built-up cold-formed steel columns.” Journal of Constructional Steel Research, 144, 65–80. https://doi.org/10.1016/j.jcsr.2018.01.007.
* Fratamico, D. C., Torabian, S., Zhao, X., Rasmussen, K. J. R., and Schafer, B. W. 2018b. “Experimental study on the composite action in sheathed and bare built-up cold-formed steel columns.” Thin-Walled Structures, 127, 290–305. https://doi.org/10.1016/j.tws.2018.02.002.
* Padilla-Llano, D. A., Eatherton, M. R., and Moen, C. D. 2016. “Cyclic flexural response and energy dissipation of cold-formed steel framing members.” Thin-Walled Structures, 98, 518–532. https://doi.org/10.1016/j.tws.2015.10.021.
* Padilla-Llano, D. A., Moen, C. D., and Eatherton, M. R. 2014. “Cyclic axial response and energy dissipation of cold-formed steel framing members.” Thin-Walled Structures, 78, 95–107. https://doi.org/10.1016/j.tws.2013.12.011.
* Peterman, K. D., and Schafer, B. W. 2014. “Sheathed Cold-Formed Steel Studs under Axial and Lateral Load.” Journal of Structural Engineering, 140 (10), 04014074. https://doi.org/10.1061/(ASCE)ST.1943-541X.0000966.
* Tao, F., Chatterjee, A., and Moen, C. D. 2016. Monotonic and cyclic response of single shear cold-formed steel-to-steel and sheathing-to-steel connections. Virginia Tech Research Report No. CE/VPI-ST-16/01, Blacksburg, VA. https://scholarsmine.mst.edu/ccfss-aisi-spec/157/.
* Torabian, S., Fratamico, David. C., and Schafer, B. W. 2016. “Experimental response of cold-formed steel Zee-section beam-columns.” Thin-Walled Structures, 98, 496–517. https://doi.org/10.1016/j.tws.2015.10.016.
* Yu, C., and Schafer, B. W. 2003. “Local Buckling Tests on Cold-Formed Steel Beams.” Journal of Structural Engineering, 129 (12), 1596–1606. https://doi.org/10.1061/(ASCE)0733-9445(2003)129:12(1596).
* Yu, C., and Schafer, B. W. 2006. “Distortional Buckling Tests on Cold-Formed Steel Beams.” Journal of Structural Engineering, 132 (4), 515–528. https://doi.org/10.1061/(ASCE)0733-9445(2006)132:4(515).
* Zhang, Z., Singh, A., Derveni, F., Torabian, S., Peterman, K. D., Hutchinson, T. C., and Schafer, B. W. 2021. “Cyclic experiments on isolated steel sheet connections for CFS framed steel sheet sheathed shear walls with new configurations.” Engineering Structures, 244, 112805. https://doi.org/10.1016/j.engstruct.2021.112805.


