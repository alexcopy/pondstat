package ru.gpsbox.pond.domain;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Field;
import org.springframework.data.mongodb.core.mapping.Document;
import javax.validation.constraints.*;

import java.io.Serializable;
import java.time.ZonedDateTime;
import java.util.Objects;

/**
 * A WaterChange.
 */
@Document(collection = "water_change")
@org.springframework.data.elasticsearch.annotations.Document(indexName = "waterchange")
public class WaterChange implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    private String id;

    @NotNull
    @Field("change_date")
    private ZonedDateTime changeDate;

    @Field("description")
    private String description;

    @NotNull
    @Field("reading_before")
    private Double readingBefore;

    @NotNull
    @Field("reading_after")
    private Double readingAfter;

    @NotNull
    @Field("temp_val")
    private Double tempVal;

    @Field("timestamp")
    private Integer timestamp;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public ZonedDateTime getChangeDate() {
        return changeDate;
    }

    public WaterChange changeDate(ZonedDateTime changeDate) {
        this.changeDate = changeDate;
        return this;
    }

    public void setChangeDate(ZonedDateTime changeDate) {
        this.changeDate = changeDate;
    }

    public String getDescription() {
        return description;
    }

    public WaterChange description(String description) {
        this.description = description;
        return this;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Double getReadingBefore() {
        return readingBefore;
    }

    public WaterChange readingBefore(Double readingBefore) {
        this.readingBefore = readingBefore;
        return this;
    }

    public void setReadingBefore(Double readingBefore) {
        this.readingBefore = readingBefore;
    }

    public Double getReadingAfter() {
        return readingAfter;
    }

    public WaterChange readingAfter(Double readingAfter) {
        this.readingAfter = readingAfter;
        return this;
    }

    public void setReadingAfter(Double readingAfter) {
        this.readingAfter = readingAfter;
    }

    public Double getTempVal() {
        return tempVal;
    }

    public WaterChange tempVal(Double tempVal) {
        this.tempVal = tempVal;
        return this;
    }

    public void setTempVal(Double tempVal) {
        this.tempVal = tempVal;
    }

    public Integer getTimestamp() {
        return timestamp;
    }

    public WaterChange timestamp(Integer timestamp) {
        this.timestamp = timestamp;
        return this;
    }

    public void setTimestamp(Integer timestamp) {
        this.timestamp = timestamp;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        WaterChange waterChange = (WaterChange) o;
        if (waterChange.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), waterChange.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "WaterChange{" +
            "id=" + getId() +
            ", changeDate='" + getChangeDate() + "'" +
            ", description='" + getDescription() + "'" +
            ", readingBefore=" + getReadingBefore() +
            ", readingAfter=" + getReadingAfter() +
            ", tempVal=" + getTempVal() +
            ", timestamp=" + getTimestamp() +
            "}";
    }
}
