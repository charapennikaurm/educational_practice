package com.bsu;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

public class AdCollection {
    private List<Ad> ads;

    public AdCollection() {
        this.ads = new ArrayList<Ad>();
    }

    public AdCollection(List<Ad> ads) {
        this.ads = ads;
    }

    private List<Ad> filterByVendors(List<Ad> ads, List<String> vendors,
                                     int skip, int top) {
        return ads.stream().filter(element -> vendors.contains(element.getVendor()))
                .skip(skip).limit(top).collect(Collectors.toCollection(ArrayList::new));
    }

    private List<Ad> filterByTags(List<Ad> ads, List<String> hashTags, int skip,
                                  int top) {
        return ads.stream().filter(element -> element.getHashTags().stream().anyMatch(hashTag -> hashTags.contains(hashTag)))
                .skip(skip).limit(top).collect(Collectors.toCollection(ArrayList::new));

    }

    public List<Ad> getAllAds(){
        return this.ads;
    }

    public Ad getAd(String id) {
        for (Ad ad : this.ads) {
            if (ad.getId().equals(id)) {
                return ad;
            }
        }
        return null;
    }

    public static boolean validate(Ad ad) {
        if (ad.getId() == null || ad.getId().length() < 1)
            return false;
        if (ad.getDescription() == null || ad.getDescription().length() >= 200)
            return false;
        if (ad.getCreatedAt() == null)
            return false;
        if (ad.getVendor() == null || ad.getVendor().length() < 1)
            return false;
        if (ad.getHashTags() == null)
            return false;
        if (ad.getDiscount() == null || ad.getDiscount().length() < 1)
            return false;
        if (ad.getValidUntil() == null)
            return false;
        return true;
    }

    public boolean add(Ad ad) {
        if (this.ads.stream().anyMatch(element -> element.getId().equals(ad.getId())))
            return false;
        if (validate(ad)) {
            this.ads.add(ad);
            return true;
        } else {
            return false;
        }
    }

    public boolean remove(String id) {
        if (this.ads.stream().anyMatch(ad -> ad.getId().equals(id))) {
            this.ads = ads.stream().filter(ad -> !ad.getId().equals(id))
                    .collect(Collectors.toCollection(ArrayList::new));
            return true;
        }
        return false;
    }

    public List<Ad> addAll(List<Ad> newAds) {
        List<Ad> notValidatedAds = new ArrayList<>();
        for (Ad ad : notValidatedAds) {
            if (!this.add(ad)) {
                notValidatedAds.add(ad);
            }
        }

        return notValidatedAds;
    }

    public void clear() {
        this.ads.clear();
    }

    public List<Ad> getAds(int skip, int top, Filter filter) {
        if (filter.getHashTags().size() == 0 && filter.getVendors().size() == 0) {
            return ads.stream().skip(skip).limit(top).collect(Collectors.toCollection(ArrayList::new));
        } else if (filter.getHashTags().size() == 0) {
            return filterByVendors(this.ads, filter.getVendors(), skip, top);
        } else if (filter.getVendors().size() == 0) {
            return filterByTags(this.ads, filter.getHashTags(), skip, top);
        } else {
            return filterByTags(filterByVendors(this.ads, filter.getVendors(), skip, top),
                    filter.getHashTags(), 0, top);
        }
    }

    public boolean edit(String id, Ad changes) {
        Ad adToChange = getAd(id);
        if (adToChange == null) {
            return false;
        }
        //cant change id, createdAt,
        Ad changedAd = new Ad(adToChange.getId(), adToChange.getDescription(), adToChange.getCreatedAt(),
                adToChange.getLink(), adToChange.getVendor(), adToChange.getHashTags(), adToChange.getValidUntil());

        if (changes.getDescription() != null) {
            changedAd.setDescription(changes.getDescription());
        }
        if (changes.getDiscount() != null) {
            changedAd.setDescription(changes.getDescription());
        }
        if (changes.getHashTags() != null) {
            changedAd.setHashTags(changes.getHashTags());
        }
        if (changes.getLink() != null) {
            changedAd.setLink(changes.getLink());
        }
        if (changes.getPhotoLink() != null) {
            changedAd.setPhotoLink(changes.getPhotoLink());
        }
        if (changes.getReviews() != null) {
            List<Review> reviews = changes.getReviews();
            changedAd.setReviews(reviews);
            double rating = 0;
            for (Review review : reviews) {
                rating += review.getRating();
            }
            rating /= reviews.size();
            changedAd.setRating(rating);
        }
        if (changes.getValidUntil() != null) {
            changedAd.setValidUntil(changes.getValidUntil());
        }

        if (validate(changedAd)) {
            for (Ad ad : ads) {
                if (ad.getId().equals(id)) {
                    ad = changedAd;
                }
            }
            return true;
        } else {
            return false;
        }
    }

}
